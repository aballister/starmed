import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    ContactForm,
    ContactFormError,
    ContactFormField,
    ContactFormTitle,
    Input,
} from './Form.style';

export default function Form() {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <ContactFormTitle>Записатись на прийом</ContactFormTitle>
            <ContactFormField>
                <Input
                    type='text'
                    {...register('name', { required: true })}
                    hasError={errors.name}
                    placeholder='Ваше імʼя'
                />
                {
                    errors.name &&
                    <ContactFormError>Поле обовʼязкове для заповнення</ContactFormError>
                }
            </ContactFormField>
            <ContactFormField>
                <Input
                    {...register('phone', { required: true })}
                    hasError={errors.phone}
                    placeholder='Контактний номер телефону'
                    type='text'
                />
                {
                    errors.phone &&
                    <ContactFormError>Поле обовʼязкове для заповнення</ContactFormError>
                }
            </ContactFormField>
            <Button type='submit' />
        </ContactForm>
    );
}