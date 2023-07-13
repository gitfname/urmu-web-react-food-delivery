import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { LockClosedIcon } from "@heroicons/react/24/outline"
import getBaseUrl from "../../utils/base-url"

function VerifyPhone() {
    return (
        <div className="w-full min-h-screen bg-gray-100 grid place-items-center p-4 md:p-8">

            <div className="w-full max-w-lg rounded-3xl p-4 md:p-8 bg-gray-50 shadow-md shadow-black/5">

                <img
                    alt=""
                    src={getBaseUrl()+"/images/verify-phone.png"}
                    className="w-36 aspect-square object-center object-cover block mx-auto"
                />

                <p
                    className="typogrophy-2 text-center mt-4"
                >
                    تایید شماره موبایل
                </p>

                <div className="flex flex-col gap-y-3 mt-8">
                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-[--primary-color-70]" />
                        </InputLeftElement>
                        <Input
                            placeholder="رمز ارسالی را وارد نمایید"
                            variant="filled"
                            fontFamily="vazir"
                            type="number"
                            maxLength={20}
                            bgColor="var(--primary-color-10)"
                            _placeholder={{
                                textColor: "var(--primary-color-60)"
                            }}
                            _hover={{
                                bgColor: "var(--primary-color-5)"
                            }}
                            _focus={{
                                borderColor: "var(--primary-color-40)"
                            }}
                            rounded="lg"
                            fontSize="sm"
                        />
                    </InputGroup>

                    <div className="w-full flex items-center gap-x-3">
                        <button className="primary-btn mt-5 w-full max-w-xs mx-auto py-2.5">
                            ارسال
                        </button>

                        <button className="primary-btn mt-5 w-full max-w-xs mx-auto py-2.5
                        bg-transparent border border-[--primary-color] text-[--primary-color] hover:text-gray-50">
                            تغییر شماره
                        </button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default VerifyPhone