module.exports = {
    toEntity: (bory) => {
        if (!bory.senha || typeof bory.senha !== 'string' || bory.senha.length < 6) {
            throw new Error('Senha é obrigatoria!');
        }
        return {
            email: bory.email,
            senha: bory.senha,
            role: bory.role,
            emailVerificado: bory.emailVerificado || false
        }
   }
}