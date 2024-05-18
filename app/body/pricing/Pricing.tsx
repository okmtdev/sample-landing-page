export const Pricing: any = () => {
  return (
    <div>
      <section className="flex items-center justify-center mt-10 pb-10">
        <div className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto">
          <h2 className="text-3xl font-semibold text-center flex gap-2 justify-center mb-10">
            選べる料金体系
          </h2>
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-standard"
                  className="text-gray-900 text-2xl font-semibold leading-8"
                >
                  標準プラン
                </h3>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600">
                最安値のリーズナブルプラン
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="line-through text-2xl font-sans text-gray-500/70">
                  3,000円
                </span>
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  2,500円
                </span>
              </p>
              <a
                href=""
                aria-describedby="tier-extended"
                className="bg-purple-700 text-white shadow-sm hover:bg-purple-800 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                target="_blank"
              >
                お問い合わせ
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  SNS連携機能
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  AIによる自動判定
                </li>
              </ul>
            </div>
            <div className="ring-2 ring-purple-700 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-extended"
                  className="text-purple-700 text-2xl font-semibold leading-8"
                >
                  プレミアムプラン
                </h3>
                <p className="rounded-full bg-purple-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-700">
                  おすすめ！
                </p>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600">
                特典グッズ付きの安心利用プラン
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="line-through text-2xl font-sans text-gray-500/70">
                  7,500円
                </span>
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  4,000円
                </span>
              </p>
              <a
                href=""
                aria-describedby="tier-extended"
                className="bg-purple-700 text-white shadow-sm hover:bg-purple-800 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                target="_blank"
              >
                お問い合わせ
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  標準プランの全ての機能
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  特別な特典グッズ
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  データの半永久保存
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  最新AIモデルの使い放題
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
