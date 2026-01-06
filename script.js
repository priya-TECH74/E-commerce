fetch("http://localhost:5000/products")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("products");
  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
});
