import Image from 'next/image';
import { Contact } from '@/body/companies/Contact';

export const Company: any = () => {
  return (
    <div>
      <Contact />
      <h2
        className="text-3xl font-semibold text-center flex gap-2 justify-center mt-8 mb-8"
        id="contact"
      >
        運営会社
      </h2>
      <div className="text-gray-600 body-font relative mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap justify-center">
            <Image
              src="company.webp"
              alt="sample kadai2 photo"
              width={400}
              height={300}
            />
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <table className="table-auto border-collapse border-transparent">
                <tbody>
                  <tr>
                    <td className="px-4 py-2">会社名</td>
                    <td className="px-4 py-2">株式会社 Hoge.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">住所</td>
                    <td className="px-4 py-2">
                      東京都XXX区YYY 1-2-3 ZZZビル 4階
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">資本金</td>
                    <td className="px-4 py-2">500万円（資本準備金含む）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">代表者</td>
                    <td className="px-4 py-2">ホゲータ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">従業員数</td>
                    <td className="px-4 py-2">3名（パート・インターン含む）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">事業内容</td>
                    <td className="px-4 py-2">Hogeの開発・運用</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">電話番号</td>
                    <td className="px-4 py-2">000-0000-0000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">メール</td>
                    <td className="px-4 py-2">info@hogehogehoge.example.jp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
