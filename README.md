# Multilingual Speech-to-Video Generation for Hearing-Impaired Object Learning

## 📌 Overview
This project is an **AI-powered Visual Dictionary** designed to assist **hearing-impaired children** in learning vocabulary through visual reinforcement. By converting spoken or typed words (in **English** or **Kannada**) into dynamic, short video clips, it bridges the gap between auditory concepts and visual understanding.

Unlike static flashcards, this tool uses **Generative AI** to create consistent, clear, and engaging videos of objects (e.g., "Apple", "Dog", "Aeroplane") in real-time.

## 🚀 Key Features
- **Multilingual Support:** Accepts input in **English** and **Kannada** (Regional Language Support).
- **Multi-Modal Input:**
  - **Voice:** Speak a word using the microphone.
  - **Text:** Type a word directly.
- **AI Video Generation:** Uses advanced Latent Diffusion Models (Zeroscope/StoryDiffusion) running on **Google Colab** to generate high-quality videos.
- **Interactive Web Interface:** A child-friendly, simple UI built with Flask and HTML5.
- **Real-Time Translation:** Automatically translates Kannada voice input to English prompts for the AI model.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Bulma CSS Framework)
- **Backend:** Python (Flask), SQLite (for history management)
- **AI Engine:** Google Colab (running Diffusers/PyTorch), Ngrok (for tunneling)
- **APIs & Libraries:**
  - `SpeechRecognition` (Google Speech API)
  - `googletrans` (Neural Machine Translation)
  - `diffusers` (Video Generation)

## ⚙️ How It Works
1.  **Input:** User speaks "ನಾಯಿ" (Nayi) into the microphone.
2.  **Processing:**
    - App converts Audio $\to$ Text ("ನಾಯಿ").
    - Translates Text $\to$ English ("Dog").
    - Enhances Prompt $\to$ "A cinematic video of a cute dog running in a garden."
3.  **Generation:** The request is sent to the **Google Colab GPU server**.
4.  **Output:** The AI generates a 3-second video and sends it back to the web dashboard for playback.

## 📸 Screenshots
*(Add screenshots of your Web Interface and Dashboard here)*

## 📥 Installation & Run
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/sandeshpy613/your-repo-name.git
    cd your-repo-name
    ```
2.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Setup Colab:**
    - Open the provided `.ipynb` notebook in Google Colab.
    - Run all cells to start the backend server.
    - Copy the **Ngrok URL** generated in Colab.
4.  **Run Flask App:**
    - Update the `COLAB_API_URL` in `app.py` with the new Ngrok URL.
    - Run the app:
    ```bash
    python app.py
    ```
5.  **Access:** Open `http://127.0.0.1:5000` in your browser.

## 👨‍💻 Author
**Sandesh PY**
- [LinkedIn](http://www.linkedin.com/in/sandeshpy613)
- [GitHub](https://github.com/sandeshpy613)

---
*Created as part of the M.Tech Dissertation at Vidyavardhaka College of Engineering, Mysuru.*
