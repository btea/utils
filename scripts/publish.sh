#!/bin/sh

set -e

npm publish --access public --provenance

echo "✅ Publish completed"