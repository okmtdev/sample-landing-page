import Image from "next/image";

export const Footer: any = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-purple-700">
              サンプル製品 Hoge
            </h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-purple-700 font-bold">
              「Hoge」とは？
            </div>
            <a className="my-3 block" href="#top">
              製品説明<span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="#solution">
              解決する課題<span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-purple-700 font-bold">
              ご利用について
            </div>
            <a className="my-3 block" href="#howto">
              ご利用の流れ<span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="#movie">
              ご利用方法<span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="#pracing">
              料金体系<span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-purple-700 font-bold">
              お問い合わせ
            </div>
            <a className="my-3 block" href="#company">
              会社について
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="#company">
              サポート体制
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              width={35}
              height={35}
              alt="facebook icon"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.svgrepo.com/show/452049/line.svg"
              width={35}
              height={35}
              alt="line icon"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.svgrepo.com/show/452229/instagram-1.svg"
              width={35}
              height={35}
              alt="instagram icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.svgrepo.com/show/452121/twitter-1.svg"
              width={35}
              height={35}
              alt="twitter icon"
            />
          </a>
        </div>
        <div className="mt-3"></div>
        <p className="text-center text-gray-500 font-small">
          &copy; 2025 株式会社ご機嫌エンジニアリング. All rights reservered.
        </p>
      </div>
    </div>
  );
};
