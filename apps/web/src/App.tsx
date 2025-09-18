import { useState, useRef, useEffect } from 'react';
import './App.css'

function App() {
  const [pedido, setPedido] = useState('');
  const [resposta, setResposta] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState('Copiar');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Redefine a altura
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Define para a altura do conteúdo
    }
  }, [resultado]); // Executa sempre que o resultado mudar

  const handleAnalisar = async () => {
    setLoading(true);
    setResultado('');
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pedido, resposta }),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi ok');
      }

      const data = await response.json();
      setResultado(data.analysis);
    } catch (error) {
      console.error('Falha ao buscar análise:', error);
      setResultado('Erro ao buscar análise. Verifique o console para mais detalhes.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resultado).then(() => {
      setCopyText('Copiado!');
      setTimeout(() => setCopyText('Copiar'), 2000);
    }, (err) => {
      console.error('Falha ao copiar texto: ', err);
      setCopyText('Erro!');
      setTimeout(() => setCopyText('Copiar'), 2000);
    });
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-4xl mt-8">
        <h1 className="text-4xl font-bold text-center mb-8">Analisador de Respostas LAI</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="pedido" className="block mb-2 text-sm font-medium text-gray-400">Texto do Pedido do Cidadão</label>
            <textarea 
              id="pedido"
              rows={10}
              className="w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cole o texto do pedido aqui..."
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="resposta" className="block mb-2 text-sm font-medium text-gray-400">Texto da Resposta da Área</label>
            <textarea 
              id="resposta"
              rows={10}
              className="w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cole o texto da resposta aqui..."
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="text-center mb-4">
          <button 
            type="button"
            onClick={handleAnalisar}
            disabled={loading || !pedido || !resposta}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {loading ? 'Analisando...' : 'Analisar'}
          </button>
        </div>

        {resultado && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="resultado" className="block text-sm font-medium text-gray-400">Resultado da Análise</label>
              <button 
                onClick={handleCopy}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-lg text-sm transition-all"
              >
                {copyText}
              </button>
            </div>
            <textarea 
              ref={textareaRef}
              id="resultado"
              className="w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg overflow-hidden resize-none"
              value={resultado}
              readOnly
            ></textarea>
          </div>
        )}
      </div>
    </main>
  )
}

export default App