import os
import glob
from rembg import remove
from PIL import Image

def process_directory(dir_path):
    print(f"Processing directory: {dir_path}")
    if not os.path.exists(dir_path):
        print(f"Directory {dir_path} does not exist, skipping.")
        return

    pattern = os.path.join(dir_path, "*.jpeg")
    files = glob.glob(pattern)
    print(f"Found {len(files)} jpeg files in {dir_path}")

    for file_path in files:
        base, _ = os.path.splitext(file_path)
        png_path = base + ".png"
        print(f"Processing: {os.path.basename(file_path)} -> {os.path.basename(png_path)}")
        try:
            with Image.open(file_path) as img:
                # Remove background
                no_bg = remove(img)
                # Save as transparent PNG
                no_bg.save(png_path, format="PNG", optimize=True)
                print(f"Successfully saved {png_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    dirs = [
        "public/products_image",
        "public/suppliments_image",
        "public/supplements_image"
    ]
    for d in dirs:
        process_directory(d)
    print("All directories processed successfully!")
