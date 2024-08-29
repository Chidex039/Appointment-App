"use client";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // @ts-ignore
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // Replace with your backend API URL
      const response = await fetch("https://your-backend-api.com/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button
          className="bg-blue-950 text-white p-2 rounded-2xl"
          type="submit"
        >
          Upload
        </button>
      </form>
      {preview && (
        <img
          className="h-32 w-32 rounded-full mx-auto border-4 border-white shadow-lg"
          src={preview}
          alt="Profile Picture"
        />
      )}
    </>
  );
};

export default ImageUpload;
