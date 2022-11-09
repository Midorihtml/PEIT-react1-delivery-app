export const getCategoryByHour = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 4 && hour < 10) return 'breakfast';
    if (hour >= 10 && hour < 14) return 'lunch';
    if (hour >= 14 && hour < 18) return 'dessert';
    if ((hour >= 18 && hour < 24) || (hour >= 0 && hour < 4)) return 'dinner';
}