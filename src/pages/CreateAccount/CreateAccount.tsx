
import {
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react"

import {
    UserIcon,
    PhoneIcon,
    LockClosedIcon
} from "@heroicons/react/24/outline"

function CreateAccount() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8 grid place-items-center">

            <div className="w-full max-w-lg rounded-3xl p-4 md:p-8 bg-gray-50 shadow-md shadow-black/5">
                <p
                    className="typogrophy-2"
                >
                    ساخت اکانت جدید
                </p>

                <div className="flex flex-col gap-y-3 mt-7">
                    <InputGroup>
                        <InputLeftElement>
                            <UserIcon strokeWidth={1.5} className="w-5 h-5 text-slate-600" />
                        </InputLeftElement>
                        <Input
                            placeholder="نام کاربری"
                            variant="filled"
                            fontFamily="vazir"
                            type="text"
                            maxLength={20}
                            bgColor="blackAlpha.50"
                            rounded="lg"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <PhoneIcon strokeWidth={1.5} className="w-5 h-5 text-slate-600" />
                        </InputLeftElement>
                        <Input
                            placeholder="شماره موبایل"
                            variant="filled"
                            fontFamily="vazir"
                            type="number"
                            maxLength={11}
                            bgColor="blackAlpha.50"
                            rounded="lg"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-slate-600" />
                        </InputLeftElement>
                        <Input
                            placeholder="رمز عبور"
                            variant="filled"
                            fontFamily="vazir"
                            type="password"
                            maxLength={20}
                            minLength={6}
                            bgColor="blackAlpha.50"
                            rounded="lg"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement>
                            <LockClosedIcon strokeWidth={1.5} className="w-5 h-5 text-slate-600" />
                        </InputLeftElement>
                        <Input
                            placeholder="تکرار رمز عبور"
                            variant="filled"
                            fontFamily="vazir"
                            type="password"
                            maxLength={20}
                            minLength={6}
                            bgColor="blackAlpha.50"
                            rounded="lg"
                        />
                    </InputGroup>

                    <button className="primary-btn mt-5 w-full max-w-xs mx-auto py-2.5">
                        ساخت اکانت
                    </button>

                </div>

            </div>


        </div>
    )
}

export default CreateAccount