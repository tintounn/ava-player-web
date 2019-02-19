export default function DurationFilter(value: any) {
  if(!value) return '';

  var hours = Math.floor(value / 3600);
  var minutes = Math.floor(value % 3600 / 60);
  if(hours >= 1) {
    return `${hours}h${minutes}`;
  }

  return `${minutes}m`;
}