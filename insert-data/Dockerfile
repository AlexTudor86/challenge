FROM python:3.11-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt

CMD ["python3", "insert_data.py"]