const TimelineItem = ({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label: string;
}) => (
  <div className="flex md:contents flex-row-reverse">
    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
      <div className="flex items-center">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <span className="bg-indigo-100 text-indigo-600 text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-indigo-600 dark:text-indigo-100">
          お客様
        </span>
      </div>
      <p className="mt-2 leading-6">{description}</p>
      <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
        {label}
      </span>
    </div>
    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
      <div className="flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-purple-600 rounded-t-full bg-gradient-to-b from-purple-600 to-purple-400"></div>
      </div>
      <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-800 rounded-full top-1/2"></div>
    </div>
  </div>
);

const TimelineItemReverse = ({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label: string;
}) => (
  <div className="flex md:contents">
    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
      <div className="flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-purple-300 rounded-t-full bg-gradient-to-b from-purple-400 to-purple-300"></div>
      </div>
      <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-purple-400 rounded-full top-1/2"></div>
    </div>
    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
      <div className="flex items-center">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <span className="bg-red-100 text-red-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-red-800 dark:text-red-100">
          弊社
        </span>
      </div>
      <p className="mt-2 leading-6">{description}</p>
      <span className="absolute text-sm text-gray-600 -top-5 left-2 whitespace-nowrap">
        {label}
      </span>
    </div>
  </div>
);

export const Timeline: any = () => {
  return (
    <div>
      {/*</div><div className="bg-purple-200 p-4 mt-1">*/}
      <div className="p-4">
        <h4 className="text-xl text-center">
          契約からサービス利用までのお客様・弊社間のタイムライン
        </h4>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <TimelineItem
            title="プランを選択・決済"
            description="プランを選択後、サービス提供ページにて決済いただきます。"
            label="1. ご契約"
          />
          <TimelineItemReverse
            title="ご契約内容確認"
            description="契約時のメールアドレスに対してサービス利用に関する資料を送付いたします。 内容確認後、正式にサービスを提供します。"
            label="2. 契約内容の確認"
          />
          <TimelineItem
            title="サービス利用"
            description="Hoge の管理画面や本番機能を利用いただけます。"
            label="3. サービス稼働中"
          />
          <TimelineItemReverse
            title="アフターサポート"
            description="サービス利用後、サービス稼働中のデータの提供やHogeブランドに関するグッズを提供します。"
            label="4. サービス利用後"
          />
        </div>
      </div>
    </div>
  );
};
