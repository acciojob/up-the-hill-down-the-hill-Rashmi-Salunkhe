function aveSpd(upTime, upSpd, downSpd) {
  // Calculate distance traveled uphill
  const upDistance = (upTime / 60) * upSpd; 

  // Calculate time traveled downhill (same distance)
  const downTime = upDistance / downSpd;

  // Calculate total distance
  const totalDistance = upDistance * 2;

  // Calculate total time
  const totalTime = upTime / 60 + downTime;

  // Calculate average speed
  const avgSpeed = totalDistance / totalTime;

  return avgSpeed;
}

// Do not change the code below
const upTime = parseInt(prompt("Enter upTime: "));
const upSpd = parseInt(prompt("Enter upSpd: "));
const downSpd = parseInt(prompt("Enter downSpd: "));

alert(aveSpd(upTime, upSpd, downSpd));