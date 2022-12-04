#define LED 7
#define TRIGGER 2
#define ECHO 3

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
  pinMode(TRIGGER, OUTPUT);
  pinMode(ECHO, INPUT);
  digitalWrite(TRIGGER, LOW);
}

void loop() {
  digitalWrite(TRIGGER, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER, LOW);
  long duration = pulseIn(ECHO, HIGH);
  long distance = (duration/2) / 29.1;
  if (distance < 20) { // if distance is less than 50 cm
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
	Serial.print(distance);
  Serial.println("");
  delay(100);
}