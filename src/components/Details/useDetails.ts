export const timeAgo = (timestamp: string | undefined): string | undefined => {
  if (timestamp) {
    const currentDate: Date = new Date();
    const parsedDate: Date = new Date(timestamp);
    const timeDifference: number = currentDate.getTime() - parsedDate.getTime();
    const daysAgo: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysAgo === 0) {
      return "Today";
    } else if (daysAgo === 1) {
      return "Yesterday";
    } else {
      return `${daysAgo} days ago`;
    }
  }
};
