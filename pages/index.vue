<template>
<div class="container mx-auto px-4 flex items-center justify-center h-screen">
    <div class="w-full">
        <div class="w-full md:w-1/3 mx-auto mb-8 bg-white rounded-lg py-4 px-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between cursor-pointer hover:shadow-lg task-item">
            <div class="flex items-center">
                <div class="list-toggle cursor-pointer"></div>
                <div class="text-lg flex items-center">
                    <span class="px-2 task-title">Work on micro interactions</span>
                </div>
            </div>
            <div>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </div>
        </div>
        <div class="w-full md:w-1/3 mx-auto mb-8 bg-white rounded-lg py-4 px-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between cursor-pointer hover:shadow-lg task-item">
            <div class="flex items-center">
                <div class="list-toggle cursor-pointer"></div>
                <div class="text-lg flex items-center">
                    <span class="px-2 task-title">Work on micro interactions</span>
                </div>
            </div>
            <div>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </div>
        </div>
        <div class="w-full md:w-1/3 mx-auto mb-8 bg-white rounded-lg py-4 px-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between cursor-pointer hover:shadow-lg task-item">
            <div class="flex items-center">
                <div class="list-toggle cursor-pointer"></div>
                <div class="text-lg flex items-center">
                    <span class="px-2 task-title">Work on micro interactions</span>
                </div>
            </div>
            <div>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
<style lang="scss">
.list-toggle {
    position: relative;
    height: 25px;
    width: 25px;

    &::before {
        content: "";
        height: 25px;
        width: 25px;
        background: #f2f2f2;
        border-radius: 100%;
        display: inline-block;
        position: absolute;
        left: 0;
        transform: scale(0);
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &::after {
        content: "";
        height: 10px;
        width: 10px;
        background: black;
        border-radius: 100%;
        display: inline-block;
        position: absolute;
        top: 8px;
        left: 7px;
        transform: scale(0.7);
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        &::after {
            transform: scale(1);
            background: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'%3E%3C/path%3E%3C/svg%3E");
            top: 2px;
            left: 3px;
            height: 20px;
            width: 20px;
            background-size: 100%;
            background-repeat: none;
        }

        &+div {
            .task-title {
                &::before {
                    width: 95%;
                }
            }
        }
    }
}

.task-title {
    position: relative;

    &::before {
        content: "";
        display: block;
        height: 2px;
        background: black;
        width: 0%;
        position: absolute;
        left: 8px;
        top: 14px;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
}
</style>
