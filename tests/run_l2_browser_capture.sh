#!/usr/bin/env bash
set -e

PORT=3010
cd /home/faaripi/develop/loyalduckpk_web

npx next start -p $PORT &
SERVER_PID=$!

cleanup() {
  kill $SERVER_PID 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "Waiting for Next.js server on port $PORT..."
for i in {1..30}; do
  if curl -s "http://127.0.0.1:$PORT/business" > /dev/null; then
    echo "Next.js server is ready!"
    break
  fi
  sleep 0.5
done

export TEST_URL="http://127.0.0.1:$PORT"
export NODE_PATH="/home/faaripi/.npm/_npx/9833c18b2d85bc59/node_modules"

echo "Running Phase W2 browser usability test..."
node /home/faaripi/develop/loyalduckpk_web/tests/browser_test.js

echo "Capturing Phase L2 reconciled screenshots..."
node /home/faaripi/develop/loyalduckpk_web/tests/l2_screenshot_capture.js
