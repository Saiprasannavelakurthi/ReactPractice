const LS_KEY = "evalData";

export const getRestaurants = () => {
  const data = localStorage.getItem(LS_KEY);
  if (!data) return [];
  return JSON.parse(data);
};

export const saveRestaurants = (data) => {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
};
