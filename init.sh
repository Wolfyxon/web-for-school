#!/bin/bash

SCRIPT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
TEMPLATE_DIR="${SCRIPT}/template"
DIR="$1"


if [ -z ${DIR} ]; then
    echo "error: No directory specified. Use 'init.sh .' to use the current directory."
    echo "This script is used for initializing pages by copying template files to the target directory."
    exit
fi

# User directory checks

if [ -f ${DIR} ]; then
  echo "error: Target directory is a file."
  exit
fi

if [ ! -d ${DIR} ]; then
  echo "Creating new directory."
  mkdir "${DIR}"
fi

if [ ! -z "$(ls -A ${DIR})" ]; then
   echo "error: Target directory must be empty"
   exit
fi

# Template directory checks

if [ ! -d ${TEMPLATE_DIR} ]; then
  echo "error: Template directory doesn't exist!"
  exit
fi

if [ -z "$(ls -A ${TEMPLATE_DIR})" ]; then
   echo "error: Template directory is empty!"
   exit
fi

# Copying

echo "Copying contents of '${TEMPLATE_DIR}' to '${DIR}'"

cp -r "${TEMPLATE_DIR}/." "${DIR}"

echo "'${DIR}' successfully initialized"