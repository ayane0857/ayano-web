import { ArrowRight, Server, Gamepad2, Coins } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">彩乃</h1>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1316364820018364416"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
        >
          導入する
          <ArrowRight className="ml-2" />
        </a>
        <Link
          href="/commands"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-purple-600 bg-white border-2 border-purple-600 rounded-full hover:bg-purple-100 transition duration-300 ml-4"
        >
          コマンド一覧を見る <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            彩乃でできること
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <Server className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                サーバー管理
              </h3>
              <p className="text-gray-600">
                チケット作成パネルやリアクションロール機能などがあります
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <Gamepad2 className="w-12 h-12 mb-4 text-pink-600" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                ゲーム
              </h3>
              <p className="text-gray-600">
                コインを使ってゲームをすることができます
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <Coins className="w-12 h-12 mb-4 text-pink-600" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                彩コイン・レベル
              </h3>
              <p className="text-gray-600">
                レベル機能や仮想コインなどがあります
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            サーバーに参加
          </h2>
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-6">
              開発兼雑談サーバーです。会話することやボットを試してみたり、質問したりいろいろできます。
            </p>
            <a
              href="https://discord.gg/mB3AXgtVEY"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              サーバーに参加
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Ayano Bot. All rights reserved.
          </p>
          <p className="text-sm">
            開発者{" "}
            <a
              href="https://ayane0857.net/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              彩音
            </a>{" "}
            | アイコンは「ふわふわ鱈メーカー4」で作成されました
          </p>
        </div>
      </footer>
    </div>
  );
}
