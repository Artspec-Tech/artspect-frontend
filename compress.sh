#!/bin/bash
cd public/videos/interactive
for file in */*; do
    IFS='/' read -r -a array <<< "$file"
    file_path="${array[0]}/${array[1]}"
    compressed_file_path="${array[0]}/compressed_${array[1]}"
    if [[ ! -f "$compressed_file_path" ]]; then
        echo "Compressing $file_path to $compressed_file_path"
        ffmpeg -i "$file_path" -vcodec libx264 -pix_fmt yuv420p -crf 37 -an "$compressed_file_path"
        rm "$file_path"
        mv "$compressed_file_path" "$file_path"
    else
        echo "Compressed version of $file_path already exists, skipping compression"
    fi
done