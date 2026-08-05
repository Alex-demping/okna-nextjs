import { TableItem } from "@/types/page"

type Props = {
    table: TableItem[]
}
export default function Table({ table }: Props) {
    return (
        <div className="mx-auto my-10 w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <table className="w-full border-collapse">
                <tbody>
                    {table.map(item => (
                        <tr key={item.id} className="border-b border-gray-100 transition hover:bg-orange-50 last:border-none">
                            <td className="px-6 py-4 text-gray-700">{item.title}</td>
                            <td className="px-6 py-4 text-right font-semibold text-gray-900 whitespace-nowrap">{item.prices}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}