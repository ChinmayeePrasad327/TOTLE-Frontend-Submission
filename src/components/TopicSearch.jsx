import React, { useState, useMemo } from 'react'

const initialTopics = [
  { id: 1, name: 'Thermodynamics', category: 'Physics' },
  { id: 2, name: 'Data Structures', category: 'Computer Science' },
  { id: 3, name: 'Organic Chemistry', category: 'Chemistry' },
  { id: 4, name: 'Linear Algebra', category: 'Mathematics' },
  { id: 5, name: 'Machine Learning', category: 'Computer Science' },
  { id: 6, name: 'Quantum Mechanics', category: 'Physics' },
  { id: 7, name: 'Artificial Intelligence', category: 'Computer Science' },
  { id: 8, name: 'Calculus III (Multivariable)', category: 'Mathematics' },
  { id: 9, name: 'Astrophysics', category: 'Astronomy' },
  { id: 10, name: 'Inorganic Synthesis', category: 'Chemistry' },
  { id: 11, name: 'Digital Signal Processing', category: 'Electrical Engineering' },
  { id: 12, name: 'Fluid Dynamics', category: 'Physics' }
]

export default function TopicSearch() {
  const [query, setQuery] = useState('')

 // Search by both Name and Category using useMemo for optimization
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q === '') return initialTopics
    
    return initialTopics.filter(topic =>
      topic.name.toLowerCase().includes(q) || //Filters by name
      topic.category.toLowerCase().includes(q) //Filters by category
    )
  }, [query])

  return (
    <div className="topic-search-card">
      <label htmlFor="topic-search" className="sr-only">Search topics</label>
      <input
        id="topic-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search topics by name or category..."
        className="search-input"
        aria-label="Search topics"
      />

      <div className="topics-grid">
        {filtered.length === 0 ? (
          <div className="no-results">No topics found.</div>
        ) : (
          filtered.map(topic => (
            <article key={topic.id} className="topic-card">
              <h3 className="topic-name">{topic.name}</h3>
              <p className="topic-category">{topic.category}</p>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
