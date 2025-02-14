export function VerticalSteps() {
  return (
    <div className=" p-8 rounded-lg">
      <div className="relative">
        {/* Dashed line connecting the steps */}
        <div className="absolute left-[19px] top-[33px] h-[calc(100%-40px)] w-[2px] border-l-2 border-dashed border-white/20" />

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white">
              1
            </div>
            <h3 className="text-xl font-semibold text-white">Escolha o Template</h3>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white">
              2
            </div>
            <h3 className="text-xl font-semibold text-white">Vincule a uma Ordem de Serviço</h3>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1939B7]">
              3
            </div>
            <h3 className="text-xl font-semibold text-white">
              Pronto, sua inspeção já está pronta
              <br />
              pra iniciar sem complicações
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

