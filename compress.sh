#!/bin/bash
cd public/videos/interactive
for file in */*; do
    IFS='/' read -r -a array <<< "$file"
    file_path="${array[0]}/${array[1]}"
    compressed_file_path="../safari/${array[0]}/${array[1]}"
    echo $compressed_file_path
    if [[ ! -f "$compressed_file_path" ]]; then
        echo "Compressing $file_path to $compressed_file_path"

        ffmpeg -i "$file_path" -c:v libx265 -pix_fmt yuv420p -crf 28 -c:a aac -b:a 128k -tag:v hvc1 -y "$compressed_file_path"
    else
        echo "Compressed version of $file_path already exists, skipping compression"
    fi
done