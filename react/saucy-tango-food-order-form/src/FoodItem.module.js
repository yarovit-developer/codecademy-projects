.card {
    display: flex;
    font-family: Tahoma, sans-serif;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 32px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  
  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 16px;
  }
  
  .imageWrapper {
    width: 30%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }
  
  .details {
    padding: 16px;
    text-align: center;
    font-weight: light;
  }
  
  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
    color: #2c2c2c;
  }
  
  .addButton {
    border: none;
    background-color: #f5f5f5;
    color: #2c2c2c;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    margin-left: auto;
  }
  