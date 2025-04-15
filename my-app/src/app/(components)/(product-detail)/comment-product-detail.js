import { Button, Label, HelperText, Textarea, FileInput } from "flowbite-react";

export default function CommentProductDetail() {
    return (
        <div className="border-[20px] border-white bg-white rounded-lg">
            <div className="bg-blue-500 border border-gray-300 rounded-md px-4 py-2 mb-4">
                <label className="text-base font-semibold text-white">
                    Đánh giá của bạn
                </label>
            </div>
            <form className="flex w-full max-w-2xl flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1">Nội dung</Label>
                    </div>
                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                </div>
                <div id="fileUpload" className="w-full"> 
                    <Label className="mb-2 block" htmlFor="file">
                        Upload file
                    </Label>
                    <FileInput id="file" />
                </div>
                <Button type="submit" className="bg-blue-500">Submit</Button>
            </form>
        </div>
    )
}
