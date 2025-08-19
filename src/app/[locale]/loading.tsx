import { Cross } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <Cross className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="absolute inset-0 bg-blue-600 rounded-lg animate-ping opacity-25"></div>
        </div>
        
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Loading...
        </h2>
        
        <p className="text-slate-600">
          Please wait while we prepare your content
        </p>
        
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}