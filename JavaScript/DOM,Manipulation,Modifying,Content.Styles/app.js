function updateProduct() {
  // Update product name
  document.getElementById("product-name").textContent = "Ultra Boost"; // text must match exactly what test expects

  // Update product description (must match exactly what test expects)
  document.getElementById("product-description").textContent =
    "High-performance shoes with superior comfort"; // text must match exactly what test expects

  // Update product image (must match exact expected URL)
  document
    .getElementById("product-image") // product image element
    .setAttribute(  // setAttribute to change the attribute
      "src",
      "https://kq-storage.s3.ap-south-1.amazonaws.com/Simulated+Work/Screenshot+2025-06-23+222455.png"
    );

  // Apply style changes
  document.body.style.backgroundColor = "#e0f7fa"; // light cyan background
  document.getElementById("product-name").style.color = "#00796b"; // because teal
  document.getElementById("product-name").style.fontSize = "28px"; // larger font size
  document.getElementById("product-description").style.fontSize = "18px"; // larger font size
}
updateProduct(); // Call the function to apply changes