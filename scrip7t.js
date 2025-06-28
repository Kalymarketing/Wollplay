body {
  background-color: #121212;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.banner-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
}

.banner {
  background-color: #1e1e1e;
  border: 2px solid #333;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: transform 0.3s;
}

.banner:hover {
  transform: scale(1.05);
}

.banner img {
  width: 100%;
  display: block;
}

.banner-title {
  padding: 10px;
  text-align: center;
  background-color: #222;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
}

