import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRecipes = async () => {
  const { data } = await axios.get(`${API_URL}/recipes`);
  return data;
};

export const fetchRecipeById = async (id) => {
  const { data } = await axios.get(`${API_URL}/recipes/${id}`);
  return data;
};

export const createRecipe = async (recipeData) => {
  const { data } = await axios.post(`${API_URL}/recipes`, recipeData);
  return data;
};

export const updateRecipe = async (id, recipeData) => {
  const { data } = await axios.put(`${API_URL}/recipes/${id}`, recipeData);
  return data;
};

export const deleteRecipe = async (id) => {
  const { data } = await axios.delete(`${API_URL}/recipes/${id}`);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${API_URL}/categories`);
  return data;
};