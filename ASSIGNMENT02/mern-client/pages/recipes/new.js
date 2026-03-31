import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createRecipe, fetchCategories } from '../../utils/api';

export default function NewRecipe() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [],
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addIngredient = () => {
    if (ingredientInput.trim()) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, ingredientInput.trim()]
      });
      setIngredientInput('');
    }
  };

  const removeIngredient = (index) => {
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecipe(formData);
      router.push('/recipes');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Ingredients</label>
          <div>
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <button type="button" onClick={addIngredient}>Add</button>
          </div>
          <ul>
            {formData.ingredients.map((ing, idx) => (
              <li key={idx}>
                {ing}
                <button type="button" onClick={() => removeIngredient(idx)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}