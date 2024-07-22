"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./Dashboard.module.css";
import ChickenNuggetPieChart from "@/components/ChickenNuggetPieChart";
import PieChart from "@/components/pieChart";

const cloudName = 'dqjwmjrka'; // Replace with your exact Cloudinary cloud name
const uploadPreset = 'unsigned_upload_preset'; // Replace with your exact Cloudinary unsigned upload preset
const Dashboard = () => {
  const [imageSrc, setImageSrc] = useState<string>("images/pasta.png");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [caloriesInfo, setCaloriesInfo] = useState<string | null>(null);

  const imageUploadBtn = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);

      // Upload the image to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Cloudinary upload error:', errorData);
          alert(`Cloudinary upload error: ${errorData.error.message}`);
          return;
        }

        const data = await response.json();
        setImageURL(data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image. Please try again.');
      }
    }
  };

  const calculateCalories = async () => {
    if (!imageURL) {
      alert("Please upload an image first.");
      return;
    }
    console.log({ imageURL });
    console.log({ imageSrc });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please calculate total calories of this food image",
                // text: "What is this image?"
              },
              {
                type: "image_url",
                image_url: {
                  url: imageURL,
                  // "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
                },
              },
            ],
          },
        ],
        max_tokens: 300,
      }),
    });

    const result = await response.json();
    console.log(result);
    const content = result.choices[0]?.message?.content || "No content available";
    setCaloriesInfo(content);
  };

  return (
    <div className={styles.dashboard}>
      <section className="section-10">
        <div className="menu-items-column">
          <div className="menu-item-card menu-item-card-1">
            <div className={styles.imageContainer}>
              <img src={imageSrc} className={styles.image} alt="Cheeseburger" />
              <input
                type="file"
                accept="image/*"
                onChange={imageUploadBtn}
                className={styles.fileInput}
              />
            </div>

            <div className="menu-item-type-1">
              <div className="menu-item-details menu-item-details-1">
                <h3>Name:</h3>
                <p></p>
                <h4>Calories:</h4>
              </div>
            </div>
            <div className="chart-group">
              <PieChart />
            </div>
          </div>
        </div>
        <div className={styles.descriptiondashboard}>
          <div className={styles.title}>Total Calories</div>
          <button
            className="button button-active view-menu"
            onClick={calculateCalories}
          >
            Calculate Calories
            <span></span>
          </button>
          <div className={styles.chart}>
            {caloriesInfo ? <p>{caloriesInfo}</p> : <p>No calories information available</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
