export const Timeline: any = () => {
  return (
    <div>
      {/*</div><div className="bg-purple-200 p-4 mt-1">*/}
      <div className="p-4">
        <h4 className="text-xl text-center">
          契約からサービス利用までのタイムライン
        </h4>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">ご契約</h3>
              <p className="mt-2 leading-6">
                プランを選択後、サービス提供ページにて決済いただきます。
              </p>
              <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
                ご契約
              </span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-purple-700 rounded-t-full bg-gradient-to-b from-purple-700 to-purple-400"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-800 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-purple-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">
                決済の確認とサービス提供
              </h3>
              <p className="mt-2 leading-6">
                契約時のメールアドレスに対してサービス利用に関する資料を送付いたします。
                決済後、正式にサービスを提供します。
              </p>
              <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
                契約内容の確認
              </span>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">サービス利用</h3>
              <p className="mt-2 leading-6">
                Hoge の管理画面や本番機能を利用いただけます。
              </p>
              <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
                サービス提供後
              </span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-purple-700 rounded-t-full bg-gradient-to-b from-purple-700 to-purple-400"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-700 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-purple-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">
                アフターサポート
              </h3>
              <p className="text-gray-600 mt-2 leading-6">
                サービス利用後、サービス稼働中のデータの提供やHogeブランドに関するグッズを提供します。
              </p>
              <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
                サービス利用後
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
