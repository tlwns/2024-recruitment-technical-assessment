from dataclasses import dataclass
from collections import Counter, OrderedDict


@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""


def leafFiles(files: list[File]) -> list[str]:

    # return [file.name for file in files if 'Folder' not in file.categories]
    # Not sure if 'Folder' is the only category that is not a leaf file

    parents = set()

    for file in files:
        # Add all parent directories to the set
        if file.parent != -1:
            parents.add(file.parent)

    return [file.name for file in files if file.id not in parents]


"""
Task 2
"""


def kLargestCategories(files: list[File], k: int) -> list[str]:
    count = Counter()

    for file in files:
        # Add the frequency of each category to the counter
        count += Counter(file.categories)

    # Sort the `k` most common categories by frequency and then by name
    count = sorted(count.most_common(k), key=lambda item: (-item[1], item[0]))

    return [category for category, _ in count]


"""
Task 3
"""


def largestFileSize(files: list[File]) -> int:
    d = {file.id: file for file in files}
    count = Counter()

    for file in files:
        if file.parent != -1:
            # Add the file size to all its ancestor directories cumulatively
            p_id = file.parent

            while p_id != -1:
                # Add the file size to the parent directory
                count[p_id] += file.size
                # Move to the up to grandparent directory
                p_id = d[p_id].parent

    return max(count.values(), default=0)


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3", "Backup.zip", "Code.py", "Document.txt", "Image.jpg",
        "Presentation.pptx", "Spreadsheet.xlsx", "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == ["Documents", "Folder", "Media"]

    assert largestFileSize(testFiles) == 20992
