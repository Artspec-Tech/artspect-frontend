#!/bin/bash
cd public/videos/interactive
for file in */*; do
    IFS='/' read -r -a array <<< "$file"
    file_path="${array[0]}/${array[1]}"
    compressed_file_path="${array[0]}/compressed_${array[1]}"
    echo "Compressing $file_path to $compressed_file_path"
    ffmpeg -i "$file_path" -vcodec libx265 -crf 28 -tag:v hvc1 -c:a eac3 -b:a 224k -an "$compressed_file_path"
    break
done