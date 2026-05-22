import streamlit as st
import numpy as np
from PIL import Image
import io
from tensorflow.keras.models import load_model

st.set_page_config(page_title="Animal Classifier", layout="centered")

MODEL_PATH = "animal_classifier.h5"
CLASS_NAMES = [
    'Bear', 'Bird', 'Cat', 'Cow', 'Deer', 'Dog', 'Dolphin',
    'Elephant', 'Giraffe', 'Horse', 'Kangaroo', 'Lion', 'Panda', 'Tiger', 'Zebra'
]

@st.cache_resource
def load_my_model(path):
    model = load_model(path)
    return model

def preprocess_image(img: Image.Image, target_size=(224, 224)):
    img = img.convert("RGB")
    # high-quality downsampling
    try:
        resample = Image.Resampling.LANCZOS
    except AttributeError:
        resample = Image.LANCZOS
    img = img.resize(target_size, resample)
    arr = np.asarray(img).astype("float32") / 255.0
    # shape: (1, 224, 224, 3)
    arr = np.expand_dims(arr, axis=0)
    return arr

def predict_image(model, image: Image.Image):
    x = preprocess_image(image)
    preds = model.predict(x)
    top_idx = int(np.argmax(preds, axis=1)[0])
    confidence = float(np.max(preds))
    label = CLASS_NAMES[top_idx] if top_idx < len(CLASS_NAMES) else str(top_idx)
    return label, confidence, preds

def main():
    st.title("Animal Image Classifier")
    st.write("Upload an image and the model will classify which animal it contains.")

    model = load_my_model(MODEL_PATH)

    uploaded_file = st.file_uploader("Choose an image file", type=["jpg", "jpeg", "png"])
    if uploaded_file is not None:
        try:
            image = Image.open(io.BytesIO(uploaded_file.read()))
        except Exception as e:
            st.error(f"Cannot open image: {e}")
            return

        st.subheader("Uploaded Image")
        st.image(image, use_column_width=True)

        if st.button("Classify"):
            with st.spinner("Classifying..."):
                label, confidence, _ = predict_image(model, image)
            st.success(f"Prediction: **{label}** ({confidence * 100:.2f}% confidence)")

            # showing resized input passed to model
            resized = image.convert("RGB").resize((224, 224))
            st.caption("Model input (224×224):")
            st.image(resized, width=224)

if __name__ == "__main__":
    main()
