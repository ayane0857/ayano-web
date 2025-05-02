import { ArrowLeft, Server, Gamepad2, Coins, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function CommandsPage() {
  const commands = [
    {
      category: "基本コマンド",
      icon: User,
      items: [
        { name: "/help", description: "Helpコマンドを表示できます" },
        { name: "/ping", description: "ping値を測定できます" },
        {
          name: "/clear [数]",
          description:
            "指定した数のメッセージを削除できます\n※14日以内のメッセージのみ\n　メッセージ管理権限保有者のみ",
        },
        { name: "/user [ユーザー]", description: "ユーザー情報を取得できます" },
      ],
    },
    {
      category: "サーバー管理",
      icon: Server,
      items: [
        {
          name: "/reactionroles [ロール] [オプション:ロール(複数)]",
          description: "リアクションロールを作成できます",
        },
        {
          name: "/ticketpanel [ロール] [オプション:ロール(複数)]",
          description: "チケットパネルを作成できます",
        },
      ],
    },
    {
      category: "コイン・レベル・彩コイン関連",
      icon: Coins,
      items: [
        {
          name: "/coin [オプション：ユーザー]",
          description: "現在のコインを確認します",
        },
        { name: "/ayacoin", description: "彩コインを確認します" },
        {
          name: "/gift [渡す金額] [ユーザー]",
          description: "コインをほかの人に渡せます",
        },
        {
          name: "/deposit [渡す金額] [ユーザー]",
          description: "コインを入金にできます",
        },
        {
          name: "/withdrawal [渡す金額] [ユーザー]",
          description: "コインを出金にできます",
        },
        {
          name: "/level [オプション：ユーザー]",
          description: "現在のレベルを確認します",
        },
        { name: "/ranking", description: "現在のランキングを表示します" },
        {
          name: "/buy-order [買う金額]",
          description: "彩コインを購入できます",
        },
        {
          name: "/sell-order [売る金額]",
          description: "彩コインを売却できます",
        },
      ],
    },
    {
      category: "ゲーム",
      icon: Gamepad2,
      items: [
        {
          name: "/cointoss [掛け金] [表か裏か]",
          description: "コイントスができます",
        },
        { name: "/chinchillo [掛け金]", description: "チンチロができます" },
        { name: "/slot [掛け金]", description: "スロットができます" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Ayano Bot Commands
        </h1>
        {commands.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
              <category.icon className="w-6 h-6 mr-2 text-purple-600" />
              {category.category}
            </h2>
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-700">
                      コマンド
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">説明</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((command, index) => (
                    <tr
                      key={command.name}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-2 font-mono text-purple-600">
                        <Badge variant="secondary" className="mb-2">
                          {command.name}
                        </Badge>
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {command.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
