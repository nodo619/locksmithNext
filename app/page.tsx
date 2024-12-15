'use client'

import { useState } from 'react'
import Header from './components/Header'
import CarForm from './components/CarForm'
import Modal from './components/Modal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    contact: ''
  })
  const [resetForm, setResetForm] = useState(false)

  const handleSubmit = (data: typeof formData) => {
    setFormData(data)
    setModalOpen(true)
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate successful response
      setIsSuccess(true)
      setModalOpen(false)
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setIsSuccess(false)
    setFormData({
      make: '',
      model: '',
      year: '',
      contact: ''
    })
    setResetForm(true)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Header />
      <main className="flex-1 p-8 flex items-center justify-center">
        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-lg mb-6">We will contact you soon.</p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <CarForm onSubmit={handleSubmit} reset={resetForm} />
        )}
      </main>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        data={formData}
        isLoading={isLoading}
      />
    </div>
  )
}

