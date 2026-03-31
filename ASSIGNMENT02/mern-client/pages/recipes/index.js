import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchRecipes, deleteRecipe } from '../../utils/api';

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      const data = await fetchRecipes();
      setRecipes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      await deleteRecipe(id);
      loadRecipes(); // refresh list
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe._id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>Category: {recipe.category?.name}</p>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
          <Link href={`/recipes/edit/${recipe._id}`}>
            <button style={{ marginLeft: '0.5rem' }}>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}