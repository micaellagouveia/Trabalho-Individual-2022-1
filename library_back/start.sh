# function for check if postgres host is accepting connections
function_postgres_ready() {
python << END
import socket
import time
import os
port = int(os.environ["POSTGRES_PORT"])
host = os.environ["POSTGRES_HOST"]
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((host, port))
s.close()
END
}

until function_postgres_ready; do
  >&2 echo "======= POSTGRES IS UNAVAILABLE, WAITING"
  sleep 1
done
echo "======= POSTGRES IS UP, CONNECTING"

python3 manage.py collectstatic --noinput
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 