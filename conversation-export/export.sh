
#!/bin/bash

# Create export directory structure
mkdir -p conversation-export/{project,meta,diagrams}

# Copy project files
cp -r src conversation-export/project/
cp -r docs conversation-export/project/
cp -r .bolt-context conversation-export/project/

# Copy meta files
cp .bolt-context/meta/dp3-concept.md conversation-export/meta/
cp .bolt-context/meta/dp3-onboarding.md conversation-export/meta/

# Copy diagrams
cp docs/architecture.md conversation-export/diagrams/

# Create archive
tar -czf pianassist-conversation.tar.gz conversation-export/

echo "Export completed: pianassist-conversation.tar.gz"
</boltAction