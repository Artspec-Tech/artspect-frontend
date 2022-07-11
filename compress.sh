#!/bin/bash
cd public/videos/interactive/safari
for file in */*; do
    IFS='/' read -r -a array <<< "$file"
    file_path="${array[0]}/${array[1]}"
    compressed_file_path="${array[0]}/${array[1]%.*}.mov"
    echo "---------------------- ${array[1]}"
    if [[ ! -f "$compressed_file_path" ]]; then
        echo "Compressing $file_path to $compressed_file_path"
        ffmpeg -i "$file_path" -acodec copy -vcodec copy -f mov "$compressed_file_path"

        rm "$file_path"
    else
        echo "Compressed version of $file_path already exists, skipping compression"
    fi
done