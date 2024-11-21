
# .bolt-context Directory

This directory contains context information for the AI assistant to better understand the user's learning style and project approach.

## Usage
1. Include this directory in project root
2. Update learning-profile.md as needed
3. Add project-specific context in separate files
4. Reference in conversations with AI

## Structure
```
.bolt-context/
├── learning-profile.md    # Core learning style and preferences
├── project-context/       # Project-specific information
│   └── [project-name].md # Context for specific projects
└── README.md             # This file
```

## Updating
- Add new projects to the "Project History" section
- Update learning goals as they evolve
- Add new preferences or requirements as neede