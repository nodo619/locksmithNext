import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  isLoading: boolean
  data: {
    make: string
    model: string
    year: string
    contact: string
  }
}

export default function Modal({ isOpen, onClose, onConfirm, isLoading, data }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Information</h2>
        <p><strong>Car Make:</strong> {data.make}</p>
        <p><strong>Car Model:</strong> {data.model}</p>
        <p><strong>Car Year:</strong> {data.year}</p>
        <p><strong>Contact Information:</strong> {data.contact}</p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              'Confirm'
            )}
          </button>
          <button
            onClick={onClose}
            disabled={isLoading}
            className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

