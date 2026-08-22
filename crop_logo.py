from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        cropped.save(output_path, "PNG")
        print(f"Cropped to {bbox} and saved as {output_path}")
    else:
        print("Image is entirely transparent or no bounding box found.")

crop_transparent("public/logo-dark-transparent.png", "public/logo-dark-transparent.png")
