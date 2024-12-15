import { useState, useEffect } from 'react'

interface CarFormProps {
  onSubmit: (data: { make: string; model: string; year: string; contact: string }) => void
  reset: boolean
}

export default function CarForm({ onSubmit, reset }: CarFormProps) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    contact: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  useEffect(() => {
    if (reset) {
      setFormData({
        make: '',
        model: '',
        year: '',
        contact: ''
      })
    }
  }, [reset])

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">A Locksmiths</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          placeholder="Car Make"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Car Model"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Car Year"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Information"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
  )
}

